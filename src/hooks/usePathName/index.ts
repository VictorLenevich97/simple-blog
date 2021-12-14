export const usePathName = () => {
    const url = typeof window !== 'undefined' ? window.location.pathname : '';

    return url;
};
