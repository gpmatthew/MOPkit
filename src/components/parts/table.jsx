import React, {useState, useEffect, useRef} from 'react';

const Table = ({ className, foot, head, id, children }) => {

    const tableRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    const checkTableWidth = () => {
        if (tableRef.current) {
            const tableWidth = tableRef.current.offsetWidth;

            if (tableWidth <= 500) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }
    };

    useEffect(() => {
        checkTableWidth();

        window.addEventListener('resize', checkTableWidth);

        return () => {
            window.removeEventListener('resize', checkTableWidth);
        };
    }, []);

    return (
        <div ref={tableRef} className={`table-container ${className} ${isMobile ? 'mobile' : ''}`} id={id}>
            <div className="table-header">
                <div className="row">
                    {head.map((column, index) => (
                        <div key={index} className={`column ${column.className}`}>
                            {column.text}
                        </div>
                    ))}
                </div>
            </div>
            <div className="table-body">
                {children}
            </div>
            {foot && (
                <div className="table-footer">

                </div>
            )}
        </div>
    );
};


export default Table;