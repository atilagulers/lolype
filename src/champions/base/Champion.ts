export default abstract class Champion {
  constructor(
    public name: string,
    public hp: number,
    public mp: number,
    public ad: number,
    public ap: number,
    public ar: number,
    public mr: number
  ) {}
}
