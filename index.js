addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const searchParams = new URL(request.url).searchParams
  const url = searchParams.get('url')
  if (!url) {
    return new Response('URL Query Parameter Required!')
  }
  const rsp = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36'
    }
  })
  const html = await rsp.text()
  return new Response(html, {
    headers: { 'content-type': rsp.headers.get('Content-Type') }
  })
}
