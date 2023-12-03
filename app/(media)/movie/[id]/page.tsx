import Media from "@/app/components/Media"

export default function Movie({ params }: { params: { id: string } }) {
    return (
        <Media type='movie' id={params.id} />
    )

}