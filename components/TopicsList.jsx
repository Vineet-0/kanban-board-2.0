import Link from 'next/link'
import RemoveBtn from './RemoveBtn'
import {HiPencilAlt} from 'react-icons/hi'

const getTopics = async () => {
    try {     
        const res = await fetch('http://localhost:3000/api/topics',{
            cache: 'no-store',
        })
        if(!res.ok){
            throw new Error("Failed to fetch topics")
        }
        return res.json();
    } catch (error) {
        console.log("Error loading Topics:",error)
    }
};

const TopicsList = async () => {

    const {topics} = await getTopics();
  return (
    <>
        {topics.map(t => (
            <div key={t._id} className='p-4 border border-slate-300 my-3 flex items-start justify-between gap-5 rounded-md hover:scale-[1.03] transition ease-in-out'>
                <div>
                    <h2 className='font-bold text-2xl'>
                        {t.title}
                    </h2>
                    <div>
                        {t.description}
                    </div>
                </div>
                <div className='flex gap-2'>
                    <RemoveBtn id={t._id}/>
                    <Link href={`/editTopic/${t._id}`}>
                        <HiPencilAlt size={24}/>
                    </Link>
                </div>
            </div>
        ))}
    </>
  )
}

export default TopicsList