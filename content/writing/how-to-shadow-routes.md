---
title: "Using shadow routes in Next.js"
date: "2022-01-31"
excerpt: "A simple example."
---

## Using the pathname query as state management

> 🚨 This method will rerender the full page every time the `?car=name` property will change but the data fetching methods like `getServerSideProps` or `getStaticProps` won't run again.

## Example

Your page has a contact form with a `subject` select field. Based on the subject of the content, you'd like to redirect users from your marketing page to the contact from and prefill the `subject` with the users demand section. At the same time you'd like your user to select another subject and store it as information. You could create a new state for that and assign the value after the router `isReady` like:

```ts
// import ...

const Form = () => {
  [subject, setSubject] = useState("");
  router = useRouter();

  useEffect(() => {
    router.isReady && setSubject(router.query.subject || "")
  }, []);

  return (
    <form>
      <select
        value={subject}
        onChange={(e) => setSubject(e.target.value));
        }}
      >
        <option value="marketing">Marketing</option>
        {...}
      </select>
    </form>
  )
}

```

Or use the `router.query.subject` to directly access the subject from the _url_ and mutate it.

```ts
// import ...

const Form = () => {
  router = useRouter();
  return (
    <form>
      <select
        value={router.query.subject}
        onChange={(e) =>
          router.push(`?subject=${e.target.value}`, undefined, {
            shallow: true,
          })
        }
      >
        <option value="marketing">Marketing</option>
        {...}
      </select>
    </form>
  )
}

```

You won't loose any additional state you are using elsewhere on your page if you are using the `shallow` routing property, as this is not a . But you will trigger a rerender in each `const router = useRouter()` Component. If used in the top level Component, and the Sub-Components are heavy to render, this will slow your website drastically.

Check out the examples pages:

- [/examples/shadow-route](https://mxkaske.dev/examples/shadow-route)
- [/examples/shadow-route?car=bmw](https://mxkaske.dev/examples/shadow-route?car=bmw)
