if (typeof document !== undefined) {
  const searchParams = new URLSearchParams(document.location.search);

  const authParam = searchParams.get("authorized");

  return authParam
}
