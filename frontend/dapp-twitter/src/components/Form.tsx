
import { FC, useState} from 'react';

export const Form: FC = () => {
    const [topic, setTopic] = useState('');
    const [message, setMessage] = useState('');


    return (
    
        <div className="flex flex-col border rounded-3xl p-4 opacity-80 m-2 mx-64">
            <input className="bg-transparent text-white border rounded-xl p-2 mb-4 outline-none focus:border-purple-500" placeholder="Topic" type="text" onChange={(e) => setTopic(e.currentTarget.value)}></input>
            <textarea className="bg-transparent text-white p-3 h-40 border rounded-xl outline-none focus:border-purple-500" placeholder="Put your tweet message here" onChange={(e) => setMessage(e.currentTarget.value)}></textarea>
        </div>
        
    );
};

