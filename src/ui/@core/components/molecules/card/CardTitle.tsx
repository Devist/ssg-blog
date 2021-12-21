interface Props {
  text: string
}

function CardTitle({ text }: Props) {
  return <h2 className="py-4 px-6">{text}</h2>
}

export default CardTitle
