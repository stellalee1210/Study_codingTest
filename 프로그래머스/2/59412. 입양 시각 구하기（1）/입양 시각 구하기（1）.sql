SELECT hour(datetime) as HOUR, count(animal_id) as COUNT
from animal_outs
where hour(datetime) between 09 and 19
group by HOUR
order by HOUR asc