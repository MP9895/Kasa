import './gallery.scss'
import datas from '../../data/data'
import Card from '../card/Card'
import React from 'react';

function Gallery() {

    return (
        <main className='home_gallery'>
            {datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </main>
    )
}

export default Gallery;