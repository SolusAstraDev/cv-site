import React from 'react';

const Masonry = ({ items = [], columns = 3, gap = 24, className = '', renderItem }) => {
    const cols = Array.from({ length: columns }, () => []);
    items.forEach((item, i) => {
        cols[i % columns].push({ item, index: i });
    });

    return (
        <div
            className={`grid ${className}`}
            style={{
                gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                gap: `${gap}px`,
            }}
        >
            {cols.map((col, ci) => (
                <div key={ci} className="flex flex-col" style={{ gap: `${gap}px` }}>
                    {col.map(({ item, index }) => (
                        <React.Fragment key={item.id ?? index}>{renderItem(item, index)}</React.Fragment>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Masonry;
