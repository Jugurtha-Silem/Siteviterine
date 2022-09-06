import React from 'react';

const SocialNetwork = () => {

    const anim = () => {
        const icons = document.querySelectorAll(".social-network a");
        
        icons.forEach((link) => {
            link.addEventListener("mouseover", (e) => {
                link.style.transform = `translate(${e.offsetx - 20}px, ${e.offsety - 13}px )`;
            })

            link.addEventListener("mouseleave", () => {
                link.style.transform = "";
            })
        })
    }

    return (
        <div className="social-network">
            <ul className='content'>
                <a href="https://www.facebook.com"  rel='noopener norefererrer' className='hover' onMouseOver={anim} >
                    <li>
                        <i className='fab fa-facebook'></i>

                    </li>
                </a>
                <a href="https://www.twitter.com" rel='noopener norefererrer' className='hover' >
                    <li>
                        <i className='fab fa-twitter'></i>

                    </li>
                </a>
                <a href="https://www.instagram.com" rel='noopener norefererrer' className='hover' >
                    <li>
                        <i className='fab fa-instagram'></i>

                    </li>
                </a>
            </ul>
        </div>
    );
};

export default SocialNetwork;