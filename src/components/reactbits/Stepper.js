import React, { useState } from 'react';

const Stepper = ({ steps = [], initialStep = 0, onStepChange = () => { }, renderStep }) => {
    const [current, setCurrent] = useState(initialStep);

    const go = (i) => {
        const clamped = Math.max(0, Math.min(steps.length - 1, i));
        setCurrent(clamped);
        onStepChange(clamped);
    };

    return (
        <div className="w-full">
            {/* Indicator rail */}
            <div className="flex items-center mb-8 overflow-x-auto pb-2">
                {steps.map((step, i) => {
                    const active = i === current;
                    const done = i < current;
                    return (
                        <React.Fragment key={step.id ?? i}>
                            <button
                                type="button"
                                onClick={() => go(i)}
                                className="group flex flex-col items-center min-w-[110px] focus:outline-none"
                                aria-current={active ? 'step' : undefined}
                            >
                                <span
                                    className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold transition-all duration-300 border ${active
                                            ? 'bg-[var(--accent)] text-white border-transparent shadow-[var(--shadow)] scale-110'
                                            : done
                                                ? 'bg-[var(--accent-2)] text-white border-transparent'
                                                : 'bg-[var(--bg-elev)] text-[var(--text-muted)] border-[var(--border)] group-hover:border-[var(--accent)]'
                                        }`}
                                >
                                    {step.icon ? (
                                        <i className={`bx ${step.icon} text-lg`}></i>
                                    ) : (
                                        i + 1
                                    )}
                                </span>
                                <span className={`mt-2 text-xs font-medium ${active ? 'text-[var(--text)]' : 'text-[var(--text-muted)]'}`}>
                                    {step.label}
                                </span>
                            </button>
                            {i < steps.length - 1 && (
                                <div
                                    className={`flex-1 h-[2px] mx-2 rounded-full transition-colors ${i < current ? 'bg-[var(--accent-2)]' : 'bg-[var(--border)]'
                                        }`}
                                />
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
            {/* Active step body */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)] p-6 shadow-[var(--shadow)]">
                {renderStep ? renderStep(steps[current], current) : steps[current]?.content}
            </div>
            <div className="flex justify-between mt-4">
                <button
                    type="button"
                    onClick={() => go(current - 1)}
                    disabled={current === 0}
                    className="px-4 py-2 rounded-md text-sm font-medium border border-[var(--border)] hover:border-[var(--accent)] disabled:opacity-40 disabled:cursor-not-allowed transition"
                >
                    Previous
                </button>
                <button
                    type="button"
                    onClick={() => go(current + 1)}
                    disabled={current === steps.length - 1}
                    className="px-4 py-2 rounded-md text-sm font-medium bg-[var(--accent)] text-white hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Stepper;
