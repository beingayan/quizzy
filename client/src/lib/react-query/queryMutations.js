import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { sendUserCredential } from '../../redux/actions/authAction';
import * as Action from '../../redux/auth_reducer'
import { signupSuccess } from './helperFunction/signupHelperFunction';


export const useCreateUserAccount = () => {
    const dispatch = useDispatch()
    return useMutation({
        mutationFn: (user) => sendUserCredential(user),
        onSuccess: (data) => signupSuccess(data, () => dispatch(Action.setUserAuth(data)))

    })
}