import MessageImg from '../assets/images/message.png'
import { EMOJI_MAPPING } from '../constants'

export default function PostCard ({ postData }) {
    return (
        <div className="relative p-[16px] mt-[16px] bg-grey-2 rounded-lg">
            <div className='absolute right-[15px] text-white cursor-pointer text-lg'>...</div>
            <div className="flex">
                <img className="w-[35px] h-[35px] rounded-full" src={postData.profilePicture}></img>
                <div className="leading-none ml-[8px]">
                    <span className='text-white text-sm'>{postData.postedBy}</span><br />
                    <span className="text-xs text-grey-1">{postData.relativeTime}</span>
                </div>
            </div>
            <div className="p-[8px] bg-grey-5 flex items-start rounded-lg mt-[14px] text-grey-1">
                <span className="p-[8px] bg-grey-2 rounded-full w-[35px] h-[35px] pl-[10px] mr-[16px]">{EMOJI_MAPPING[postData.emojiType]}</span>
                <span>{postData.postContent}</span>
            </div>
            <div className="mt-[14px] text-left flex items-center">
                <img className='w-[20px] h-[25px]' src={MessageImg} />
                <div className='ml-[8px] text-grey-1 text-xs cursor-pointer'>{postData.commentsCount} comments</div>
            </div>
        </div>
    )
}