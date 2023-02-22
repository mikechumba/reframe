import Image from 'next/image'

const Gallery = ({ images }) => {
  return (
    <section className="gallery">
      {images.map((img, i) => (
        <Image src={img} width="400" height="300" alt="" key={`img-${i+1}`} />
      ))}
    </section>
  )
}

export default Gallery;