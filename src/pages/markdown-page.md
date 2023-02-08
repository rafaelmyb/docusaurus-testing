---
title: Markdown page example
---

# Markdown page example

```jsx live showLineNumbers
function MarkdownRequest(props) {
  const [data, setData] = useState();

  const options = {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json" },
    body: JSON.stringify({
      manual_upload_enabled: false,
      requested_data_period: "3",
      type: "uk_income_verification",
    }),
  };

  function handleAxiosRequest() {
    fetch("https://api.mistho.io/api/v1/configurations", options)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => setData(err));
  }

  return (
    <>
      <button onClick={handleAxiosRequest}>Try it!</button>

      {data && (
        <div>
          <span>message: {data.message}</span>
        </div>
      )}
    </>
  );
}
```
