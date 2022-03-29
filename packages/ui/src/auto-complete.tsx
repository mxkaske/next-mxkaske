import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  autoUpdate,
  Dimensions,
  ElementRects,
  size,
  useId,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
} from "@floating-ui/react-dom-interactions";
import { data } from "./data/auto-complete";
import TextArea from "./text-area";

interface ItemProps {
  children: React.ReactNode;
  active: boolean;
}

// eslint-disable-next-line react/display-name
const Item = forwardRef<
  HTMLLIElement,
  ItemProps & React.HTMLProps<HTMLLIElement>
>(({ children, active, ...rest }, ref) => {
  const id = useId();
  return (
    <li
      ref={ref}
      role="option"
      id={id}
      aria-selected={active}
      {...rest}
      className={`${
        active ? "text-white" : "text-gray-500"
      } bg-transparent cursor-pointer px-2 py-1 ${rest.className}`}
    >
      {children}
    </li>
  );
});

export function AutoComplete() {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [sizeData, setSizeData] = useState<Dimensions & ElementRects>();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const currentWord = useRef("");

  const blockMouseEventsRef = useRef(false);
  const listRef = useRef<Array<HTMLLIElement | null>>([]);

  const { x, y, reference, floating, strategy, context, refs, update } =
    useFloating({
      open,
      onOpenChange: setOpen,
      middleware: [size({ apply: setSizeData, padding: 10 })],
    });

  const onNavigate = useCallback((activeIndex: number | null) => {
    if (activeIndex != null) {
      listRef.current[activeIndex]?.scrollIntoView({
        block: "nearest",
      });
    }
    setActiveIndex(activeIndex);
  }, []);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useRole(context, { role: "listbox" }),
    // useDismiss(context),
    useListNavigation(context, {
      listRef,
      activeIndex,
      onNavigate,
      virtual: true,
      loop: true,
    }),
  ]);

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setInputValue(value);
    const lastWord = value.split(" ").pop()?.replace(" ", "") ?? "";
    currentWord.current = lastWord;
    console.log(lastWord);
    if (lastWord) {
      setOpen(true);
      setActiveIndex(0);
    } else {
      setOpen(false);
    }
    // console.log(event.target.setRangeText("wow", 0, 0));
  }

  const items = data.filter((item) =>
    item.toLowerCase().startsWith(currentWord.current.toLowerCase())
  );

  useEffect(() => {
    if (open && refs.reference.current && refs.floating.current) {
      return autoUpdate(refs.reference.current, refs.floating.current, update);
    }
  }, [open, update, refs.reference, refs.floating]);

  return (
    <>
      <TextArea
        {...getReferenceProps({
          ref: reference,
          onChange,
          value: inputValue,
          placeholder: "Enter fruit",
          className: "w-full",
          onKeyDown(event) {
            blockMouseEventsRef.current = true;

            if (
              event.key === "Enter" &&
              activeIndex != null &&
              items[activeIndex]
            ) {
              setInputValue(items[activeIndex]);
              setActiveIndex(null);
              setOpen(false);
            }
          },
        })}
        ref={textAreaRef}
      />
      {open && (
        <div
          {...getFloatingProps({
            ref: floating,
            className:
              "border border-gray-300 rounded-md hover:border-gray-400 dark:hover:border-gray-600 dark:border-gray-700",
            style: {
              position: strategy,
              left: x ?? "",
              top: y ?? "",
              width: sizeData?.reference.width ?? "",
              maxHeight: sizeData?.height ?? "",
              overflowY: "auto",
            },
            onPointerMove() {
              blockMouseEventsRef.current = false;
            },
            onKeyDown() {
              blockMouseEventsRef.current = true;
            },
          })}
        >
          <ul>
            {items.map((item, index) => (
              <Item
                key={item}
                ref={(node) => {
                  listRef.current[index] = node;
                }}
                active={activeIndex === index}
                onClick={() => {
                  setInputValue(item);
                  setOpen(false);
                  (refs.reference.current as HTMLElement | null)?.focus();
                }}
                onMouseEnter={() => {
                  if (!blockMouseEventsRef.current) {
                    setActiveIndex(index);
                  }
                }}
                onMouseLeave={() => {
                  if (!blockMouseEventsRef.current) {
                    setActiveIndex(null);
                  }
                }}
              >
                {item}
              </Item>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default function App() {
  return <AutoComplete />;
}
