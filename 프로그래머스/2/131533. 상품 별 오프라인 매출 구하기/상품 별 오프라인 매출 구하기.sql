select product_code, sum(p.price * o.sales_amount) as sales
from product as p left outer join offline_sale as o
    on p.product_id = o.product_id
where o.offline_sale_id is not null 
and o.product_id is not null
group by product_code
order by sales desc, product_code