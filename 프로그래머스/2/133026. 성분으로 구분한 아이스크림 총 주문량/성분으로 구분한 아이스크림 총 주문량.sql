select INGREDIENT_TYPE, sum(total_order) as total_order
from first_half as f left outer join icecream_info as i
    on f.flavor = i.flavor
group by INGREDIENT_TYPE
order by total_order 