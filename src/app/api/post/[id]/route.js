import { NextResponse } from 'next/server';
import Post from '@/models/Post';
import connect from '../../../../../utils/db';
 
export async function GET(request, {params}) {
  
    const {id} = params

    try {
        await connect()
        const post = await Post.findById(id)
        return NextResponse.json(post, {status: 200});
        
    } catch (error) {
        return NextResponse.json("Database Error", {status: 500});
    }
 
}