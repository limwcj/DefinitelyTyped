import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Checks if value is undefined.
         *
         * @param value The value to check.
         * @return Returns true if value is undefined, else false.
         */
        isUndefined(value: any): value is undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * see _.isUndefined
         */
        isUndefined(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * see _.isUndefined
         */
        isUndefined(): LoDashExplicitWrapper<boolean>;
    }
}