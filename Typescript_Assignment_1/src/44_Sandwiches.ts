function make_sandwich(...ingredients: string[]): string{
    let message: string = `Customer wants a sandwich with ${ingredients}`
    return message
}

console.log(make_sandwich('cheese', 'meat'))
console.log(make_sandwich('cheese', 'meat', 'pepperoni'))
console.log(make_sandwich('cheese', 'pepperoni'))