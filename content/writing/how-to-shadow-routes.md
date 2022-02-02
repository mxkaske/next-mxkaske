---
title: "Using shadow routes in Next.js"
date: "2022-01-31"
excerpt: "A simple example."
---

## Using the pathname query as state management

> 🚨 This method will rerender your Component every time the `?subject=name` property will change but the data fetching methods like `getServerSideProps` or `getStaticProps` won't run again.

### Example

Your page has a contact form with a `subject` select field. Based on the subject of the content, you'd like to redirect users from your marketing page to the contact form and prefill the `subject=marketing` select box. At the same time you'd like your user to select another subject and store it as controlled value. You could create a new state for that and assign the value after the router `isReady` like:

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
          router.replace(`?subject=${e.target.value}`, undefined, {
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

We use `replace` instead of `push` so that the user can go back to the previous page without having to click through all the different selected states.

Be aware that you will trigger a rerender also in each higher Component that is using the `useRouter()` hook. This sometimes is heavy to render and will slow down your website. But for simple use cases like below, it is totally valid! See:

- [/examples/shadow-route](https://mxkaske.dev/examples/shadow-route) (empty state)
- [/examples/shadow-route?subject=marketing](https://mxkaske.dev/examples/shadow-route?subject=marketing)

Read more about shadow routes in the [nextjs docs](https://nextjs.org/docs/routing/shallow-routing).
