import Media from "@/app/components/Media"

export default function TV({ params }: { params: { id: string } }) {
  return (
    <Media type='tv' id={params.id} />
  )
}