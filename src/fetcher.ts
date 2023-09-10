import ky from 'ky';

const fetcher = <T>(url: string): Promise<T> => ky.get(`http://localhost:3000${url}`).json();

export default fetcher;