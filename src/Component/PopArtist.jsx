import React from 'react'

const PopArtist = () => {
    const artists =[
              {
                "name": "Pritam",
                "tag": "card.tag.artist",
                "image": "https://i.scdn.co/image/ab6761610000e5ebcb6926f44f620555ba444fca"
              },
              {
                "name": "Arijit Singh",
                "tag": "card.tag.artist",
                "image": "https://i.scdn.co/image/ab6761610000e5eb5ba2d75eb08a2d672f9b69b7"
              },
              {
                "name": "Sachin-Jigar",
                "tag": "card.tag.artist",
                "image": "sachin_jigar.jpg"
              },
              {
                "name": "A.R. Rahman",
                "tag": "card.tag.artist",
                "image": "ar_rahman.jpg"
              },
              {
                "name": "Vishal-Shekhar",
                "tag": "card.tag.artist",
                "image": "vishal_shekhar.jpg"
              },
              {
                "name": "Atif Aslam",
                "tag": "card.tag.artist",
                "image": "atif_aslam.jpg"
              },
              {
                "name": "Anirudh Ravichander",
                "tag": "card.tag.artist",
                "image": "anirudh_ravichander.jpg"
              }
            
    ]
  return (
    <>
    <div className='w-full h-full m-3'>
        <div className='w-full h-full m-3  flex justify-between items-center'>
            <p className='text-white font-bold text-3xl p-2'>Popular Artists</p>
            <p className='text-white font-bold text-md p-2'>Show all</p>
        </div>
        <div className='w-full h-20 flex'>
            {artists.map((artist,index)=>{
                return(
                    <div className='text-white'>
                        <img 
                        className='h-[150px] w-[150px] overflow-hidden m-2 rounded-full '
                        src={artist.image} alt={artist.tag} />
                        <p className='font-bold'>{artist.name}</p>
                        <p>Artist</p>
                    </div>
                )
            })}
            <div className=''>

            </div>
        </div>
    </div>
    

    </>
  )
}

export default PopArtist