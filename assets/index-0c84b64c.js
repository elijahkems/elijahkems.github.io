(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e);
  new MutationObserver((e) => {
    for (const o of e)
      if (o.type === "childList")
        for (const n of o.addedNodes)
          n.tagName === "LINK" && n.rel === "modulepreload" && t(n);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(e) {
    const o = {};
    return (
      e.integrity && (o.integrity = e.integrity),
      e.referrerPolicy && (o.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const o = i(e);
    fetch(e.href, o);
  }
})();
(function () {
  emailjs.init("rSr6_y6MNtLHljZFZ");
})();
let d = document.querySelector("#contact-form"),
  c = document.querySelector("#submit-btn"),
  l = document.querySelector("#success-div"),
  f = document.querySelector("#success-div > p"),
  u = {
    serviceId: "service_04fwch8",
    templateId: "template_ya7yofa",
    publicKey: "rSr6_y6MNtLHljZFZ",
  };
function m(r) {
  r.preventDefault();
  let { formObj: s, Isvalid: i } = h(d);
  i || a("Form inputs not valid!!"),
    i == !0 &&
      Object.keys(s).length != 0 &&
      emailjs.send(u.serviceId, u.templateId, s).then(
        function (t) {
          console.log("SUCCESS!", t.status, t.text), g();
        },
        function (t) {
          a("Error sending the message"), console.log("FAILED...", t);
        }
      );
}
function g() {
  let r;
  (f.textContent = "Message Sent"),
    c.classList.toggle("hidden"),
    l.classList.toggle("hidden"),
    (r = setTimeout(() => {
      d.reset(),
        c.classList.toggle("hidden"),
        l.classList.toggle("hidden"),
        clearTimeout(r);
    }, 5e3));
}
function a(r) {
  let s;
  (f.textContent = r),
    c.classList.toggle("hidden"),
    l.classList.toggle("hidden"),
    l.classList.replace("text-blue", "text-coral"),
    (s = setTimeout(() => {
      c.classList.toggle("hidden"),
        l.classList.toggle("hidden"),
        l.classList.replace("text-coral", "text-blue"),
        clearTimeout(s);
    }, 5e3));
}
function h(r) {
  let s = !0,
    i = {};
  return (
    [...r].forEach((t) => {
      t.value == "" &&
        t.id !== "submit-btn" &&
        (t.classList.toggle("border-coral"), (s = !1));
    }),
    [...r].forEach((t) => {
      if (t.id !== "submit-btn") {
        let e = t.value.trim();
        i[t.name] = e;
      }
    }),
    console.log({ formObj: i, Isvalid: s }),
    { formObj: i, Isvalid: s }
  );
}
c.addEventListener("click", m);
