import Account from '../models/Account';
export interface StringIfi {
    readonly key: 'mbox' | 'mbox_sha1sum' | 'openid';
    readonly value: string;
}
export interface AccountIfi {
    readonly key: 'account';
    readonly value: Account;
}
declare type Ifi = StringIfi | AccountIfi;
export default Ifi;
