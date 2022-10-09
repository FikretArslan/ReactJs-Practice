import React from 'react'

const Practice2 = () => {
    const isLogin=false;
    const name = "Ali";
    const surname = "Can";
  return (
    <div>
        {
            isLogin ? 
            (
                <>
                <div>Hoşgeldiniz {name} {surname}</div>
                <ul>
                    <li>Profil</li>
                    <li>Rezervasyonlar</li>
                    <li>Çıkış</li>
                </ul>
                </>
            ) : 
            (
                <div>Lütfen giriş yapınız</div>
            )
        }
    </div>
  )
}

export default Practice2