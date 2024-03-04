import { Helmet } from "react-helmet-async"

export default function PageTitle({ title = "" }: { title?: string }) {
  return (
    <Helmet>
      <title>Template {title.length ? ` - ${title}` : ""}</title>
    </Helmet>
  )
}
