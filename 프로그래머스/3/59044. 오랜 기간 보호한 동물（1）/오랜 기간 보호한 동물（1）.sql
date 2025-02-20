-- 코드를 입력하세요
SELECT i.name as NAME, i.datetime as DATETIME
from animal_ins as i left outer join animal_outs as o
    on i.animal_id = o.animal_id
    where i.name is not null
    and o.name is null
order by i.datetime
limit 3