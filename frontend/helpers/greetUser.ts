export function greetUser(): string {
    // Get the current hour
    const hour = new Date().getHours();
    let greeting: string;

    if (hour < 12) {
        greeting = 'Good morning';
    } else if (hour < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }

    return `${greeting}, `;
}
