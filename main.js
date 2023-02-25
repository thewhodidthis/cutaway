;((d) => {
  const host = d.createElement("pre")
  const body = d.body
  const stringify = JSON.stringify
  const log = console.log

  // Overtake existing `console.log` to insert mirroring.
  // https://stackoverflow.com/questions/1215392
  console.log = (...args) => {
    // Stringify parameters like `console.log` does internally more or less. Note that `typeof null`
    // is an object too. Also, calling `<Number>.toString()` directly may be a syntax error, but
    // having `<Number>` assigned to `z` is no problem.
    const input = args.map((z = "undefined") => (typeof z === "object" ? stringify(z, null, "\t") : z.toString()))

    if (input.length) {
      // Extract out and fill in substitution strings if any.
      const main = input.shift().replace(/%[soOfid]/g, () => input.shift())

      // Collate what is left.
      const rest = input.reduce((p, n) => `${p} ${n}`, "")

      // Observe line breaks past first call.
      host.innerHTML += host.innerHTML === "" ? "" : "\n"
      host.innerHTML += main + rest
    }

    // Do as originally intended.
    log(...args)
  }

  body?.firstChild?.before(host)

  return host
})(document)
