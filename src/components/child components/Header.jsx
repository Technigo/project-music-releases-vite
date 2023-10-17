export const Header = ({ header }) => {
    return (
        <p>
            <span>Header:</span>
            {header}
        </p>
    );
};

Header.defaultProps = {
    header: "No header",
};