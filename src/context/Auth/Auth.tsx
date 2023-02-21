import Loading from 'components/Loading';
import { createContext, useState, type ReactNode } from 'react';

export interface AuthContextProps {
	setLoadingLoginVerification: (e: boolean) => void;
	isLoadingLoginVerification: boolean;
	setLogged: (e: boolean) => void;
	isLogged: boolean;
}

export interface AuthProviderProps {
	children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({
	setLoadingLoginVerification: () => null,
	isLoadingLoginVerification: false,
	setLogged: () => null,
	isLogged: false,
});

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
	const [isLogged, setLogged] = useState(false);
	const [isLoadingLoginVerification, setLoadingLoginVerification] =
		useState(false);

	if (isLoadingLoginVerification) {
		return <Loading />;
	}

	return (
		<AuthContext.Provider
			value={{
				isLogged,
				setLogged,
				isLoadingLoginVerification,
				setLoadingLoginVerification,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
