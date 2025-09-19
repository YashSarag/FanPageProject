import React from 'react'
import akshaan_img from '../assets/gallery-16.jpg'
function Biography(){
  const akshaanSehrawatWorks = [
  {
    show:"Sunny Sanskari Ki Tulsi Kumari",
    link:"https://share.google/J1pJdIHYgkG3aVSRR",
    role: 'not known yet'
  },
  {
    show:"Taarak Mehta Ka Ooltah Chashmah",
    link:"https://share.google/OSVz1ikwJLUXTUpTv",
    role: 'Veer Binjola'
  },
  // {
  //   show:"Aankhon Ki Gustakhiyan",
  //   link:"https://www.imdb.com/hi/title/tt28812582/?ref_=ext_shr_lnk"
  // },
  {
    show:"Therepy Sherepy",
    link:"https://www.imdb.com/title/tt31702041/?ref_=ext_shr_lnk",
    role:"Young gulshan devaiah"
  },
  {
    show:"Baalshiv",
    link:"https://share.google/2XxKvoO2qQnPoQN7w",
    role:"Child Bhagwan Vishnu"
  },
  {
    show:"Main Hoon Aprajita",
    link:"https://share.google/FFlpKi4Shy0e0xrOa",
    role: "Shubham singh"
  },
  {
    show:"Durga – Atoot Prem Kahani",
    link:"https://share.google/3CfGIWSmcvwnC6JHQ",
    role:"Young Anurag"
  },
  {
    show:"Kyun Utthe Dil Chhod Aaye",
    link:"https://share.google/RCBnj2FDDBmWRFCgt",
    role: "Kabir sahni"
  },
  // {
  //   show:"Suhagan Chudail",
  //   link:"https://share.google/PLe31WWeIQ0TDqCp5"
  // },
  {
    show:"Saavi Ki Savari",
    link:"https://share.google/TbgdCkp7RaYVLWlBz",
    role: "Young nityam dalmiya"
  },
  {
    show:"Lekar Hum Deewana Dil",
    link:"https://share.google/Pj6HJkXElQf0j4r1e",
    role: "Neelu Singh"
  },
  
  {
    show: "Chaya Grah Rahu Ketu",
    link:"https://www.imdb.com/title/tt33046323/?ref_=ext_shr_lnke",
    role: "Bhakt Prahlaad"
  },
  {
    show: "Ishq Ki Dastaan Naagmani",
    link:"https://share.google/QV5CSmgr98JQYmVlY",
    role: "Nandu"
  },
  
  
 

];


  return (
    <div className='w-[91%] max-w-[1160px] mx-auto mb-[20px]'>
        <div className='flex w-full gap-x-[40px] justify-center items-center bio-hero'>
          <img className='w-[91%] max-w-[600px]' src={akshaan_img}/>
          <div>
            <div className='bio-heading'>
              <h1 className='text-[40px] font-bold tracking-[2px] leading-[45px] opacity-[0.9]'>Akshaan Sehrawat</h1>
              <p className='opacity-80 text-richblack-700'>Actor</p>
            </div>

            <h2 className='text-[25px] font-bold opacity-[0.8] mt-[25px] mb-[10px]'>About</h2>
            <p className=''>
              Akshaan Sehrawat is a rising actor from Mumbai, known for his versatile roles across television and film. From portraying <span className='italic'>Baal Vishnu in Baalshiv</span> to sharing the screen in projects like <span className='italic'>Sunny Sanskari Ki Tulsi Kumari</span> ,<span className='italic'> Taarak Mehta Ka Ooltah Chashmah</span> , and many popular TV dramas, he continues to impress audiences with his natural talent and screen presence.
            </p>
          </div>
        </div>

        <div>
          <h2 className='text-[25px] font-bold opacity-[0.8] mt-[25px] mb-[10px]'>Career Highlights</h2>
          <p>
            Akshaan Sehrawat, born in Mumbai, Maharashtra, India, is a talented young actor who has quickly made his mark in the world of television and film. With a natural flair for performance and a wide acting range, he has played diverse roles across genres — from mythology to contemporary drama.
          </p>
          <p className='my-[20px]'>He is widely recognized for his performances in -</p>
          <ul className='flex flex-wrap gap-[10px]'>
            {
              akshaanSehrawatWorks.map((show)=>(
                <a href={show.link} target='_blank'>
                  <li className='show-bg p-[20px] rounded-md max-w-max'>
                    <div>{show.show}</div>
                    <div className='text-[12px]'>{show.role}</div>
                  </li>
                </a>
              ))
            }
          </ul>
        </div>
          <h2 className='text-[25px] font-bold opacity-[0.8] mt-[25px] mb-[10px]'>Trivia</h2>
          <p>
            Akshaan Sehrawat is not only an emerging actor but also a multi-talented performer with a strong background in gymnastics, skating, and swimming. His versatility has opened doors beyond films and television, leading him to feature in several major advertising campaigns. Over the years, he has had the opportunity to collaborate with celebrated personalities such as Ayushmann Khurrana, Shubman Gill, Nita Ambani, Sunny Deol, Riteish Deshmukh, Genelia Deshmukh, Pankaj Tripathi, Sanya Malhotra, among many others.
          </p>
        <div>

        </div>

    </div>
  )
}

export default Biography