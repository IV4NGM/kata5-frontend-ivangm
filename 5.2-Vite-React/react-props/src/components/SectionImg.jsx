import PropTypes from 'prop-types'

function SectionImg ({ sectionClass, img, divClass, h2Class }) {
  return (
    <section className={sectionClass}>
      <img src={img} alt='' />
      <div className={divClass}>
        <h2 className={h2Class}>
          Title Section
        </h2>
        <p className='parrafo'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum velit neque necessitatibus exercitationem rem quisquam, ipsa fuga, laborum similique dolorem accusamus adipisci quam eaque nulla voluptas vitae error reiciendis.</p>
        <a href='' className='cta'>Learn more</a>
      </div>
    </section>
  )
}

SectionImg.propTypes = {
  sectionClass: PropTypes.string.isRequired,
  divClass: PropTypes.string.isRequired,
  h2Class: PropTypes.string.isRequired
}
export default SectionImg
