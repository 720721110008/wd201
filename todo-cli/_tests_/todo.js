const todolist=require('../todo');
const{all,markAscomplete,add}=todolist();
describe("todolist test suite", () =>
{
    beforeAll(() =>{
        add(
            {
                title:"test todo",complted:false,duedate:newdate().ToLocalDatestring("en-CA"),
            }
        )

        })
    })
    Test ("should add new to do",() =>
    {
        const todoItemscount=all.length;
        add(
            {
                title:"test todo",complted:false,duedate:newdate().ToLocalDatestring("en-CA"),
            }
        )
        expect(all.length).toBe(todoTemscount+1);
    })
    test("should mark a todo as complete",() =>
    {
        expect(all[0].completed).toBe(false);
        markAscomplete(0);
        expect(all[0].complete).toBe(true);
    })
