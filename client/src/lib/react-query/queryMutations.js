import {
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery
    }from '@tanstack/react-query';
import { sendUserCredential } from '../../redux/actions/authAction';


    export const useCreateUserAccount = ()=>{
        return useMutation({
            mutationFn:(user) => sendUserCredential(user)(user)
        })
    }