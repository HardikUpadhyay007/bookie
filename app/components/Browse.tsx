Error: Invalid src prop (https://example.com/book.jpg) on `next/image`, hostname "example.com" is not configured under images in your `next.config.js`
See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host

app\browse\page.tsx (622:41) @ BrowseContent/<.children<.children<.children<.children<

  620 |                                 >
  621 |                                     <div className="w-full flex justify-center">
> 622 |                                         <Image
      |                                         ^
  623 |                                             src={book.imageUrl}
  624 |                                             alt={book.title}
  625 |                                             width={160}

Call Stack 9
Show 6 ignore-listed frame(s)
BrowseContent/<.children<.children<.children<.children<
app\browse\page.tsx (622:41)
BrowseContent
app\browse\page.tsx (615:42)
BrowsePage
app\browse\page.tsx (697:13)