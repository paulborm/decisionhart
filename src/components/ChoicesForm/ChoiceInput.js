import React from "react";
import Button from "../Button";

import "./_ChoiceInput.scss";

const ChoiceInput = React.forwardRef((
        props,
        ref,
    ) => {

    const { value, onChange, onSubmit, onBlur } = props;
    const baseName = "ChoiceInput";
    const classNames = [
        baseName,
    ];

    function focusInput() {
        ref.current.focus();
    }

    return (
        <div className={classNames.join(' ')} onClick={focusInput}>
            <form
                className={`${baseName}__form`}
                onSubmit={onSubmit}
                onBlur={onBlur}
            >
                <input
                    ref={ref}
                    className={`${baseName}__input`}
                    type="text"
                    value={value}
                    placeholder="Möglichkeit hinzufügen..."
                    onChange={onChange}
                />

                <Button
                    disabled={value.length <= 0}
                    type="submit"
                    className={`${baseName}__remove`}
                >
                    <svg className={`${baseName}__removeIcon`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                        <path fill="#8806af" d="M465.167 211.614H280.245V26.691c0-8.424-11.439-26.69-34.316-26.69s-34.316 18.267-34.316 26.69v184.924H26.69C18.267 211.614 0 223.053 0 245.929s18.267 34.316 26.69 34.316h184.924v184.924c0 8.422 11.438 26.69 34.316 26.69s34.316-18.268 34.316-26.69V280.245H465.17c8.422 0 26.69-11.438 26.69-34.316s-18.27-34.315-26.693-34.315z"/>
                    </svg>
                </Button>
            </form>
        </div>
    );
});

export default ChoiceInput;