interface Props {
  text: string
}

function CardTitle({ text }: Props) {
  return <h2 className="py-4">{text}</h2>
}

export default CardTitle
