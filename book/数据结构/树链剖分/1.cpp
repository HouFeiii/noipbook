
// 当前点u,重链顶点sf:super father
void dfs2(int u,int sf ){ //
    top[u] = sf;
    if( son[u] != -1)//有重儿子
        dfs(son[u],sf);
    else     //只有叶节点没有重儿子
        return;

    //更新它点
    int i;
    for(i= head[u]; i !=-1;i=E[i].next){
        int v = E[i].v;
        if( v != son[u] && v!= fa[u]){
            dfs2(v,v);
        }
    }

}
