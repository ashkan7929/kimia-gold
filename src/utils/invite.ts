export function buildInviteUrl(code: string) {
    const base = typeof window !== 'undefined' ? window.location.origin : 'http://vem.example';
    const clean = (code || '').trim();
    const url = new URL('/invite', base);
    if (clean) url.searchParams.set('code', clean);
    return url.toString();
}

export async function copyToClipboard(text: string) {
    try {
        if (navigator?.clipboard?.writeText) {
            await navigator.clipboard.writeText(text);
            return true;
        }
    } catch {
        console.log('');
    }
    try {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'absolute';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        const ok = document.execCommand('copy');
        document.body.removeChild(ta);
        return ok;
    } catch {
        return false;
    }
}

export function openCentered(url: string, w = 600, h = 600) {
    const dualScreenLeft = window.screenLeft ?? window.screenX ?? 0;
    const dualScreenTop = window.screenTop ?? window.screenY ?? 0;
    const width = window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;
    const height = window.innerHeight ?? document.documentElement.clientHeight ?? screen.height;
    const left = width / 2 - w / 2 + dualScreenLeft;
    const top = height / 2 - h / 2 + dualScreenTop;
    window.open(url, '_blank', `width=${w},height=${h},top=${top},left=${left},noopener`);
}
