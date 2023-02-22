import Image from 'next/image'

const Gallery = ({ images }) => {
  return (
    <section className="gallery" aria-labelledby="gallery-section-title">
      <h2 id="gallery-section-title" className="mb-2 h2-small">Gallery</h2>
      <div className="image-grid">
        {images.map((img, i) => (
          <div className="image" key={`img-${i+1}`} >
            <Image src={img} width="400" height="300" alt="" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery;