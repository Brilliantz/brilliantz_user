import React from 'react'
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const SuccessNotif = () => {
    const history = useHistory();
    return (
        <div 
            style={{width: '400px' , height: '330px'}}
            className="d-flex justify-content-between flex-column align-items-center"    
        >   
            <div>
                <svg width="202" height="184" viewBox="0 0 202 184" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d)">
                        <rect x="41" y="32" width="120" height="120" rx="60" fill="#4A47D6"/>
                        <path d="M80.718 105V97.032L73.198 82.6H77.838L82.798 92.936L87.726 82.6H92.302L84.814 97.032V105H80.718ZM90.8923 105L99.0843 82.6H103.692L111.884 105H107.532L105.74 99.816H97.0043L95.1803 105H90.8923ZM98.1243 96.616H104.62L101.356 87.304L98.1243 96.616ZM117.968 105V97.032L110.448 82.6H115.088L120.048 92.936L124.976 82.6H129.552L122.064 97.032V105H117.968Z" fill="white"/>
                    </g>
                    <ellipse cx="65.1601" cy="18" rx="8.02001" ry="8" stroke="#4A47D6" stroke-width="2"/>
                    <ellipse cx="45.1101" cy="165" rx="8.02001" ry="8" stroke="#4A47D6" stroke-width="2"/>
                    <ellipse cx="172.428" cy="105" rx="8.02001" ry="8" stroke="#4A47D6" stroke-width="2"/>
                    <ellipse cx="30.0726" cy="56" rx="3.00751" ry="3" fill="#FFB332"/>
                    <ellipse cx="125.811" cy="163.5" rx="2.50625" ry="2.5" transform="rotate(-180 125.811 163.5)" fill="#FFB332"/>
                    <ellipse cx="15.5363" cy="68.5" rx="6.51626" ry="6.5" fill="#FFB332"/>
                    <ellipse cx="139.345" cy="157" rx="5.01251" ry="5" transform="rotate(-180 139.345 157)" fill="#FFB332"/>
                    <path d="M144.358 41C149.37 37.7994 156.488 41 158.894 33.64C161.3 26.28 169.587 20.1467 173.43 18" stroke="#4A47D6" stroke-width="2" stroke-linecap="round"/>
                    <path d="M201 156.946C195.78 154.094 188.898 157.772 185.994 150.592C183.091 143.413 174.404 137.858 170.423 135.977" stroke="#4A47D6" stroke-width="2" stroke-linecap="round"/>
                    <path d="M19.045 122C16.0375 122.697 9.72177 125.178 8.51876 129.527C7.01501 134.964 12.5288 142.491 1 145" stroke="#4A47D6" stroke-width="2" stroke-linecap="round"/>
                    <defs>
                        <filter id="filter0_d" x="9" y="0" width="184" height="184" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="16"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.992157 0 0 0 0 0.392157 0 0 0 0 0.356863 0 0 0 0.16 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                    </defs>
                </svg>
            </div>
            <h1 style={{fontSize: '32px'}}>Silahkan cek email kamu</h1>
            <Button style={{height: '48px' , width: '220px', backgroundColor: 'transparent' , border: '2px solid #4A47D6' , color: '#4A47D6'}} onClick={() => history.push('/login')}>
                Kembali ke Halaman Login
            </Button>
        </div>
    )
}

export default SuccessNotif
