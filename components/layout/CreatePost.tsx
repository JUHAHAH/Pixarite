import { rootUrl } from '@/constants';
import axios from 'axios';

export default async function CreatePost() {
  const { data } = await axios.post(rootUrl + '/api/posts');
}
