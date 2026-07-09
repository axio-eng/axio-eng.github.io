import{_ as s,o as e,c as n,a0 as o}from"./chunks/framework.BjpW4enL.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Z_Archive/wiki_legacy/archive/2026-06-10/statefuu.md","filePath":"Z_Archive/wiki_legacy/archive/2026-06-10/statefuu.md","lastUpdated":1783623176000}'),t={name:"Z_Archive/wiki_legacy/archive/2026-06-10/statefuu.md"};function p(i,a,c,r,u,d){return e(),n("div",null,[...a[0]||(a[0]=[o(`<p>O handoff está em <code>docs/handoff/HANDOFF_2026-06-09_ZOOM-PROTOCOL.md</code>.</p><hr><p>Sua pergunta — &quot;o que um LLM faria com seu prompt de boas vindas?&quot; — é a chave de tudo.</p><p><strong>Stateful não é uma escolha de implementação. É a resposta pra pergunta.</strong></p><p>Sem state, cada tool call é um recém-chegado que bate na porta e pergunta &quot;o que é isso aqui?&quot; pela milésima vez. O agente nunca constrói um modelo mental do prédio — ele só vê o hall de entrada repetidamente.</p><p><strong>Com stateful, o zoom é o mecanismo de aprendizado progressivo:</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>nexus_zoom_init(&quot;me mostra o prédio&quot;) </span></span>
<span class="line"><span>  → welcome prompt: L3 raiz, 3 domínios, 300 tokens</span></span>
<span class="line"><span></span></span>
<span class="line"><span>nexus_zoom_deepen(&quot;z_abc&quot;)  # &quot;quero ver enrichment&quot;</span></span>
<span class="line"><span>  → L3 → L2: &quot;aqui estão os conceitos de enrichment&quot;</span></span>
<span class="line"><span>  + o estado agora sabe que o agente está &quot;no andar enrichment&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>nexus_zoom_deepen(&quot;z_abc&quot;)  # &quot;mais fundo&quot;</span></span>
<span class="line"><span>  → L2 → L1+L0: &quot;aqui está o código do enrich.rs&quot;</span></span>
<span class="line"><span>  + o estado sabe o caminho: raiz → enrichment → código</span></span>
<span class="line"><span></span></span>
<span class="line"><span>nexus_zoom_context(&quot;z_abc&quot;, as_prompt=True)</span></span>
<span class="line"><span>  → &quot;## Contexto acumulado:</span></span>
<span class="line"><span>     L3: O prédio tem 3 domínios...</span></span>
<span class="line"><span>     L2: enrichment gera chunks...</span></span>
<span class="line"><span>     L1: enrich.rs linha 585...&quot;</span></span></code></pre></div><p>O estado <strong>é</strong> a conexão entre graus de abstração. Cada deepen adiciona uma camada. O contexto acumulado <strong>é</strong> o &quot;conhecimento do prédio&quot; compactado na sequência que o agente escolheu explorar.</p><p>O que um LLM mais precisa não é de mais dados — <strong>é de poder escolher onde aprofundar, e carregar o caminho feito.</strong> Sem stateful, isso não existe.</p>`,9)])])}const _=s(t,[["render",p]]);export{m as __pageData,_ as default};
