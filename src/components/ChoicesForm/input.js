import React from "react";

const ChoicesInput = React.forwardRef((
        props,
        ref,
    ) => {

    const { baseName, value, onChange, onSubmit, onBlur } = props;

    return (
        <div className={`${baseName}__formContainer`}>
            <form className={`${baseName}__form`} onSubmit={onSubmit} onBlur={onBlur}>
                <div className={`${baseName}__input`}>
                    <input
                        type="text"
                        value={value}
                        placeholder="Möglichkeit hinzufügen..."
                        ref={ref}
                        onChange={onChange}
                    />
                </div>
            </form>
        </div>
    );
});

export default ChoicesInput;