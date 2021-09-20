import React from 'react'
import imageAbout from "../../../assets/ImageAbout.png"
import { Badge } from 'react-bootstrap';

const About = ({ size }) => {
    return (
        <div id="about">
            <div className={`${size.width < 1150 ? "" : "d-flex "} align-items-center`} style={{ padding: `${size.width < 1150 ? "50px 0px" : "70px 0px"}` }}>
                <div className={`${size.width < 1150 ? "w-100" : "w-50"} ${size.width < 1150 ? "mb-4" : ""}`}>
                    <h1 className={`${size.width < 1150 ? "mb-4" : "my-4"} fw-bold`}>Tentang Brilliantz</h1>
                    <p className="fs-4 my-4" style={{ color: '#575757', fontSize: '20px' }}>Kami membantu mahasiswa untuk mempersiapkan diri mereka dengan matang untuk memasuki dunia perguruan tinggi..</p>
                    <Badge className="p-3 m-0" style={{ backgroundColor: '#E4E3F9', color: '#4A47D6' }}>Berdiri sejak 2020</Badge>
                </div>
                <div className={`w-100 h-100 d-flex justify-content-end ${size.width < 1150 ? "flex-column-reverse" : "align-items-end"} flex-wrap `}>
                    <div className={`${size.width < 1150 ? "my-3" : "mb-5"} mx-4 text-center`}>
                        <svg width="62" height="83" viewBox="0 0 62 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.125131 81.5156C-0.142373 81.9988 0.032463 82.6074 0.51564 82.8749C0.998816 83.1424 1.60736 82.9675 1.87487 82.4844L0.125131 81.5156ZM60.4918 49.4177L59.5055 49.2528L60.4918 49.4177ZM61.4611 4.24615C61.597 3.71086 61.2733 3.16671 60.738 3.03077L52.0149 0.815422C51.4796 0.679478 50.9355 1.00321 50.7995 1.5385C50.6636 2.0738 50.9873 2.61794 51.5226 2.75389L59.2764 4.72308L57.3073 12.4769C57.1713 13.0122 57.495 13.5564 58.0303 13.6923C58.5656 13.8283 59.1098 13.5045 59.2457 12.9692L61.4611 4.24615ZM1.87487 82.4844C8.53158 70.4608 24.8366 53.1666 38.6988 43.5074C42.1554 41.0988 45.4296 39.1869 48.3376 37.9517C51.2684 36.7069 53.7176 36.197 55.5691 36.4527C56.4772 36.5781 57.2267 36.8853 57.8337 37.3694C58.441 37.8537 58.9554 38.5549 59.3324 39.5442C60.0992 41.556 60.269 44.688 59.5055 49.2528L61.4781 49.5827C62.2628 44.8911 62.1563 41.3376 61.2013 38.8319C60.7175 37.5624 60.0097 36.5467 59.0808 35.8058C58.1517 35.0648 57.0512 34.6384 55.8427 34.4715C53.461 34.1426 50.611 34.8132 47.5558 36.1109C44.4777 37.4183 41.0792 39.4111 37.5554 41.8665C23.496 51.6631 6.95863 69.1727 0.125131 81.5156L1.87487 82.4844ZM59.5055 49.2528C57.3208 62.3143 51.9811 68.178 46.6734 69.5076C41.356 70.8396 35.4597 67.7758 31.7789 61.6362C24.526 49.5384 26.2662 25.5259 61.0031 4.8594L59.9805 3.1406C24.7033 24.1286 22.0231 49.2531 30.0635 62.6646C34.0294 69.2797 40.7082 73.0637 47.1594 71.4477C53.6202 69.8293 59.2424 62.9493 61.4781 49.5827L59.5055 49.2528Z" fill="#252D30" />
                        </svg> <br />
                        Dokumentasi <br />Kegiatan
                    </div>

                    <img src={imageAbout} alt="imageJumbotron" style={{ width: `${size.width < 1150 ? "100%" : "508px"}`, height: `${size.width < 1150 ? "100%" : "auto"}`, borderRadius: '15px' }} />
                </div>
            </div>
        </div>
    )
}

export default About
