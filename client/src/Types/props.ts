import { User } from "../Types/models";


/* ---------======= custom props ======--------- */

export interface ProfileProps {
  user: User | null,
}

/* ---------===== auth form props =====--------- */

export interface AuthFormProps {
    handleAuthEvt: () => void;
    updateMessage: (msg: string) => void;
  }